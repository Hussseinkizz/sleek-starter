// * types and interfaces defining our data models in UI_data.tsx
// each interface or type in plural such as banks can be a table in database if code-first approach is taken or use an ORM like prisma!

// make sure to remove everything and do your own these just for example

type img_url = string;
type statusType = 'pending' | 'success' | 'failed';
type postType = 'poem' | 'discussion' | 'quote';

// User entity type
export interface $User {
  id: string;
  authId: string; // foreign key
  username: string;
  email: string;
  password: string;
  profilePicture: img_url;
  bio: string;
  hasClubs: boolean;
  hasbookRecommendations: boolean;
  isPremium: boolean;
  subscriptionId: string; // foreign key to payments table
  // ... other relevant user fields
}

export interface $Payment {
  id: string;
  userId: string; // foreign key
  status: statusType;
  amount: number;
  paymentMethod: string;
  referenceId: string;
  createdAt: Date;
}

// Post entity type
export interface $Post {
  id: string;
  userId: string;
  title: string;
  postType: postType;
  hasAttachments: boolean;
  attachmentUrl: string;
  content: string;
  createdAt: Date;
  isCollab: boolean;
  originalPostId: string; // empty if collab is false
  isDraft: boolean;
  hasCollabs: boolean;
  hasTags: boolean;
  // ... other relevant poem fields
}

// Comment entity type
export interface $Comment {
  id: string;
  postId: string;
  userId: string;
  content: string;
  createdAt: Date;
  // ... other relevant comment fields
}

// Reply entity type
export interface $Reply {
  id: string;
  replyId: string; // since replies can also have replies
  commentId: string;
  userId: string;
  content: string;
  createdAt: Date;
  hasReactions: boolean;
  // ... other relevant reply fields
}

// Star entity type
export interface $Star {
  id: string;
  postId: string;
  userId: string;
  createdAt: Date;
  // ... other relevant star fields
}
export interface $Reaction {
  id: string;
  replyId: string;
  userId: string;
  createdAt: Date;
  // ... other relevant star fields
}

// Book Recommendation entity type
export interface $SocialTodo {
  id: string;
  userId: string;
  todo: string;
  createdAt: Date;
  // ... other relevant book recommendation fields
}
export interface $BookRecommendation {
  id: string;
  userId: string;
  bookTitle: string;
  author: string;
  description: string;
  // ... other relevant book recommendation fields
}

export interface $Reading {
  id: string;
  userId: string;
  bookTitle: string;
  author: string;
  description: string;
  // ... other relevant book recommendation fields
}

// Book Club entity type
export interface $BookClub {
  id: string;
  adminUserId: string;
  name: string;
  description: string;
  createdAt: Date;
  // ... other relevant book club fields
}

// Club Membership entity type
export interface $ClubMembership {
  id: string;
  clubId: string;
  userId: string;
  createdAt: Date;
  // ... other relevant club membership fields
}

// Tag entity type
export interface $Tag {
  id: string;
  postId: string;
  userId: string;
  name: string;
  createdAt: Date;
  // ... other relevant club membership fields
}

// Mention entity type
export interface $Mention {
  id: string;
  postId: string;
  userId: string;
  mentionedUserId: string;
  mentionedUserName: string;
  createdAt: Date;
  // ... other relevant club membership fields
}
