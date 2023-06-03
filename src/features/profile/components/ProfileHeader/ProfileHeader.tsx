import { useState } from "react";
import Button from "../../../../components/Button/Button";
import { updateUserProfile } from "../../../../store/features/thunks";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import styles from "./ProfileHeader.module.scss";

const ProfileHeader = () => {
  const firstName = useAppSelector((state) => state.user.userData.firstName);
  const lastName = useAppSelector((state) => state.user.userData.lastName);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const confirmEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstNameInput = document.getElementById(
      "firstName"
    ) as HTMLInputElement;
    const lastNameInput = document.getElementById(
      "lastName"
    ) as HTMLInputElement;

    const newFirstName = firstNameInput.value || firstName;
    const newLastName = lastNameInput.value || lastName;

    dispatch(
      updateUserProfile({ firstName: newFirstName, lastName: newLastName })
    );

    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={styles.header}>
        <h1>Welcome back</h1>
        <form className={styles.userForm} onSubmit={confirmEdit}>
          <div className={styles.inputWrapper}>
            <input id="firstName" type="text" placeholder={firstName} />
            <input id="lastName" type="text" placeholder={lastName} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button id="confirm-edit" type="submit" value="Save" style="edit" />
            <Button
              id="cancel-edit"
              type="button"
              value="Cancel"
              style="edit"
              clickHandler={toggleEdit}
            />
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className={styles.header}>
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <Button
        id="edit-name"
        type="button"
        value="Edit Name"
        style="edit"
        clickHandler={toggleEdit}
      />
    </div>
  );
};

export default ProfileHeader;
