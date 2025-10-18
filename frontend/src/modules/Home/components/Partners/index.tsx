import React, { useEffect, useState } from "react";

const USERS_URL = "https://reqres.in/api/users";

export default function Table() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageSize = 6; // modifico el total por pagina segun API

  const fetchData = async (pageNum) => {
    setLoading(true);
    try {
      const res = await fetch(`${USERS_URL}?page=${pageNum}`, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      const json = await res.json();

      setData(json.data);
      setCount(json.total);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1); // la api no tiene page 0 como en codility
  }, []);

  const totalPages = Math.ceil(count / pageSize);

  const goToFirst = () => {
    if (page > 1) {
      setPage(1);
      fetchData(1);
    }
  };

  const goToPrev = () => {
    if (page > 1) {
      const prev = page - 1;
      setPage(prev);
      fetchData(prev);
    }
  };

  const goToNext = () => {
    if (page < totalPages) {
      const next = page + 1;
      setPage(next);
      fetchData(next);
    }
  };

  const goToLast = () => {
    const last = totalPages;
    if (page < last) {
      setPage(last);
      fetchData(last);
    }
  };

  const disableFirstPrev = loading || page === 1;
  const disableNextLast = loading || page === totalPages;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className="pagination">
        <button
          className="first-page-btn"
          onClick={goToFirst}
          disabled={disableFirstPrev}
        >
          first
        </button>
        <button
          className="previous-page-btn"
          onClick={goToPrev}
          disabled={disableFirstPrev}
        >
          previous
        </button>
        <button
          className="next-page-btn"
          onClick={goToNext}
          disabled={disableNextLast}
        >
          next
        </button>
        <button
          className="last-page-btn"
          onClick={goToLast}
          disabled={disableNextLast}
        >
          last
        </button>
      </section>
    </div>
  );
}
