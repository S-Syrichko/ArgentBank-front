import { loginAPI } from "../../../store/features/thunks";
import { useAppDispatch } from "../../../store/store";

const useLoginForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (username: string, password: string) => {
    dispatch(loginAPI({ email: username, password }));
  };

  const resetForm = () => {
    const target = document.getElementById("login-form") as HTMLFormElement;
    if (target) {
      target.reset();
    }
  };

  return { handleSubmit, resetForm };
};

export default useLoginForm;
