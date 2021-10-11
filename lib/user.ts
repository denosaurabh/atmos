export interface OwnerI {
  id: string;
  avatar: string;
  fullName: string;
  displayName?: string;
  country?: string;
  jobTitle: string;
  verified: boolean;
}

export interface UserI {
  id: string;
  fullName: string;
  displayName?: string;
  country?: string;
  jobTitle: string;
  avatar: string;
  verified: boolean;
  wishlist?: string[];
}
