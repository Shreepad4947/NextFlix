/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  'Coming Soon': undefined;
  Search: undefined;
  Download: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  MovieDetailScreen:undefined;
};

export type LibraryParamList = {
  LibraryScreen: undefined;
};
export type SearchParamList = {
  SearchScreen: undefined;
};
export type DownloadParamList = {
  DownloadScreen: undefined;
};

export type Episode={
  id:string,
  title:string,
  poster:string,
  duration:string,
  plot:string,
  video:string,
};

