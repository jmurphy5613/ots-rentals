import { useEffect, useState } from "react";
import styles from "./UserManager.module.css";
import axios from "axios";
import { User } from "../../../utils/types";
import UserGrid from "../user-grid/UserGrid";

const UserManagement = () => {
    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();

    const [users, setUsers] = useState<Array<User>>([]);

    const getUsers = () => {
        axios
            .get(
                "http://https://ots-rentals-server-production.up.railway.app/user/get-all"
            )
            .then((res) => {
                setUsers(res.data);
            });
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <input
                    className={styles["user-input"]}
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    className={styles["user-input"]}
                    placeholder="Name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <div
                    className={styles.add}
                    onClick={() => {
                        axios.post(
                            "http://https://ots-rentals-server-production.up.railway.app/user/add",
                            {
                                email: email,
                                name: name,
                            }
                        );

                        getUsers();
                    }}
                >
                    +
                </div>
            </div>
            <h1 className={styles["user-counter"]}>Users ({users.length})</h1>

            <UserGrid users={users} />
        </div>
    );
};

export default UserManagement;
