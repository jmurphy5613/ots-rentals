import styles from "../styles/Search.module.css";
import GearGrid from "../components/user-view/gear-grid/gear-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Gear } from "../utils/types";

const Search = () => {
    const [gear, setGear] = useState([]);
    const [searchValue, setSearchValue] = useState<string>("");

    const fetchData = () => {
        axios.get("http://localhost:3002/gear/get-all").then((e) => {
            setGear(e.data);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredGear = gear.filter((element: Gear, index: number) => {
        return (
            element.name.toLocaleLowerCase().includes(searchValue) ||
            element.company.toLocaleLowerCase().includes(searchValue)
        );
    });

    return (
        <>
            <div className={styles.container}>
                <input
                    className={styles.search}
                    placeholder="Search all camera gear rentals"
                    onChange={(e) => {
                        setSearchValue(e.target.value.toLocaleLowerCase());
                    }}
                />
                <h2 className={styles["result-count"]}>
                    All ({filteredGear.length})
                </h2>
                <GearGrid gear={filteredGear} />
            </div>
        </>
    );
};

export default Search;
