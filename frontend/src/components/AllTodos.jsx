import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/slices/apiSlices";

const AllTodos = () => {
	const dispatch = useDispatch();
	const { loading, data, error } = useSelector((state) => state.api);
	useEffect(() => {
		dispatch(fetchData());
  }, [dispatch]);
  if (loading) {
    return <div>Loading ...</div>
  }
    if (error) {
			return <div>Error : {error}</div>;
		}
	return (
		<div>
			<h1>All Todos</h1>
			<div>
				{data.map((todo, i) => (
					<div>{todo.title}</div>
				))}
			</div>
		</div>
	);
};

export default AllTodos;
