import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./apiSlice";

const MyComponent = () => {
	const dispatch = useDispatch();
	const { loading, data, error } = useSelector((state) => state.api);
	useEffect(() => {
		dispatch(fetchData());
	}, []);
	if (loading) {
		return <div> Loading ...</div>;
	}
	if (error) {
		<div>Error : {error}</div>;
	}
	return <div>
		{data?.map((item) => {
			return <div>
				<h5>{ item.title}</h5>
			</div>
		})}
	</div>;
};

export default MyComponent;
