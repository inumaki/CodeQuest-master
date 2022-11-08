import { useEffect, useState } from "react";
import { NewPost, Post, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../features/post/postSlice";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
const HomePage = () => {


  const [editorial, setEditorial] = useState([]);
  const editorialCollectionRef = collection(db, "editorial");

  const { posts, status } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(fetchPosts());

    //  const [Editorial,SetEditorial]=usestate(arr[]);    
    // do a network call from firebase and set the result in editorial state

  }, []);

  useEffect(()=>{

const getEditorial = async() =>{

const data = await getDocs(editorialCollectionRef)
setEditorial(data.docs.map((doc)=>({...doc.data(),id:doc.id})))

};


getEditorial();

  },[]);





  return (
    <div>

   {   <div className="editorial">
     
     {editorial.map((editorialInfo)=>{return (
     <div><h1>Title : {editorialInfo.title}</h1></div>)})}
   
   </div>}

   
      <NewPost />
      <p className="text-xl mt-2 font-bold dark:text-white">Your Posts</p>
      {/* {status === "loading" && (
        <div className="flex justify-center fixed text-center left-0 right-0">
          <Loader />
        </div>
      )} */}
      {posts
        // use the editorial state to map over the editorial fetched from the firebase above
     


        .filter((post) => post.username === user.username)
        .map(({ _id, content, username, fullname, comments, profileImage }) => (
          <Post
            key={_id}
            _id={_id}
            content={content}
            username={username}
            fullname={fullname}
            comments={comments}
            profileImage={profileImage}
          />
        ))}
      {posts.filter((post) => post.username === user.username).length === 0 && (
        <p className="m-2 text-xl text-center dark:text-slate-100">
          You do not have any posts.
        </p>
      )}
    </div>
  );
};

export { HomePage };
