import { useEffect, useState } from "react";
import { getCookie } from "typescript-cookie";
import { setToken } from "../../../store/features/userSlice";
import { useAppDispatch } from "../../../store/store";

const useCookie = () => {
  const dispatch = useAppDispatch();
  const [isCookie, setIsCookie] = useState<boolean>(false);

  useEffect(() => {
    const getCredCookie = () => {
      const cookie = getCookie("token");
      if (cookie) {
        dispatch(setToken(cookie));
        setIsCookie(true);
      }
    };

    getCredCookie();
  }, []);

  return { isCookie };
};

export default useCookie;
