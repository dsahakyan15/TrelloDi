import { useDispatch } from "react-redux";
import { AppDispatch } from "entitles/redux/store";

export const useAppDispatch: ()=> AppDispatch = useDispatch