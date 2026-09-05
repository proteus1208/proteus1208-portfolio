export interface Requirement {
  name: string;
  items: string[];
}

export interface JoinMeItem {
  title: string;
  overview: string;
  requirements: Requirement[];
  image: string;
  delivers?: string[];
}

/** Marketing / hiring intro removed. */
export const joinMeItems: JoinMeItem[] = [];
