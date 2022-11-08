import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { vishalGaurav, bhavishAggarwal ,tanayPratap} from "../utils/images";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
    "Alice is playing a game. In this game, an array A of N cards is given with some associated points. The task is to reduce the array to a single element. It can be achieved by operating a certain number of times. For every operation, Alice is awarded some points, and the total score would be the sum of points awarded overall operations.The operation is defined as:Select a contiguous subarray (i,j) starting at index i and ending at index j from A with at least two elements, and replace it with the sum of the subarray elements. The points awarded for this operation is (-1+1) ming, where ming represents the minimum value in subarray (i,j).• Print the maximum possible score Alice can get. Constraints:1 <= n <= 60  -1e9 <= A[i] <= 1e9"
    
    ,
   
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aryankatiyar",
    fullname: "Aryan Katiyar",
    profileImage: vishalGaurav,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "bhash",
        profileImage: bhavishAggarwal,
        fullName:"Bhavish Aggarwal",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque ",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "tanaypratap",
        fullName:"Tanay Pratap",
        profileImage: tanayPratap,
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque ",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "bhash",
    fullname: "Bhavish Aggarwal",
    profileImage: bhavishAggarwal,
    comments: [
      {
        _id: uuid(),
        username: "vishalg8454",
        fullName:"Vishal Gaurav",
        profileImage: vishalGaurav,
        text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "tanaypratap",
        fullName:"Tanay Pratap",
        profileImage: tanayPratap,
        text: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
