import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type NewsTypes = {
  imgSrc: string | StaticImport;
  _id: string;
  categoryName: string;
  title: string;
  image: string;
  date: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const fetchNews = async (): Promise<NewsTypes[]> => {
  try {
    const response = await fetch(
      "https://arise9jaserver.vercel.app/post-category/HomePage"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchBusinessNews = async (): Promise<NewsTypes[]> => {
  try {
    const response = await fetch(
      "https://arise9jaserver.vercel.app/post-category/Business"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    return data.posts; // Assuming the API returns { posts: NewsTypes[] }
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchBreakingNews = async (): Promise<NewsTypes[]> => {
  try {
    const response = await fetch(
      "https://arise9jaserver.vercel.app/post-category/BreakingNews"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    return data.posts; // Assuming the API returns { posts: NewsTypes[] }
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchSport = async (): Promise<NewsTypes[]> => {
  try {
    const response = await fetch(
      "https://arise9jaserver.vercel.app/post-category/Sports"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchTechnology = async (): Promise<NewsTypes[]> => {
  try {
    const response = await fetch(
      "https://arise9jaserver.vercel.app/post-category/Tech"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchPolities = async (): Promise<NewsTypes[]> => {
  try {
    const response = await fetch(
      "https://arise9jaserver.vercel.app/post-category/Politics"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchHealth = async (): Promise<NewsTypes[]> => {
  try {
    const response = await fetch(
      "https://arise9jaserver.vercel.app/post-category/Health"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchGlobal = async (): Promise<NewsTypes[]> => {
  try {
    const response = await fetch(
      "https://arise9jaserver.vercel.app/post-category/Global"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchBusiness = async (): Promise<NewsTypes[]> => {
  try {
    const response = await fetch(
      "https://arise9jaserver.vercel.app/post-category/Business"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchAfrican = async (): Promise<NewsTypes[]> => {
  try {
    const response = await fetch(
      "https://arise9jaserver.vercel.app/post-category/Africa"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
