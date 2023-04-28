import styles from "../../styles/customers.module.css";
import data from '../../data/data'
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data.customers()
      .then((data) => {
        setCustomers(data);
        setLoading(false);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (loading) {
    return <Spinner />;
  } else
    return (
      <>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order Name</th>
                <th>Order ID#</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr key={i}>
                  <td data-label="Name">{c.name}</td>
                  <td data-label="Email">{c.email}</td>
                  <td data-label="Order ID">{c.order}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Customers;
