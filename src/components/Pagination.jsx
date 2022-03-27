import React, { useEffect, useState } from 'react'

function Pagination({ data, RenderComponent, pageLimit, dataLimit, wrapperClassName }) {

	const [pages] = useState(Math.round(data.length / dataLimit));
	const [currentPage, setCurrentPage] = useState(1);

	function goToNextPage() {
		setCurrentPage((page) => page + 1)
	}
	function goToPreviousPage() {
		setCurrentPage((page) => page - 1)
	}
	function changePage(event) {
		setCurrentPage(Number(event.target.textContent))
	}

	// useEffect(() => console.log(data, currentPage, getPaginatedData()))

	const getPaginatedData = () => {
		console.log(currentPage, dataLimit)
		const startIndex = currentPage * dataLimit - dataLimit
		const endIndex = startIndex + dataLimit
		return data.slice(startIndex, endIndex)
	}

	const getPaginationGroup = () => {
		const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
		return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
	}

	return (
		<div>
			<div className={wrapperClassName}>
				{getPaginatedData().map((d, idx) => (
					<RenderComponent key={idx} todo={d}/>
				))}
			</div>

			<div className="text-gray-700 text-lg mt-5 flex justify-around pagination">
				<button onClick={goToPreviousPage} disabled={currentPage === 1} className={"disabled:text-gray-200"}>Previous</button>
				{getPaginationGroup().map((pageNumber, index) => (
					<button key={index} onClick={changePage} disabled={currentPage === pageNumber} className=" disabled:text-green-400 disabled:underline">{pageNumber}</button>
				))}
				<button onClick={goToNextPage} disabled={currentPage === pages} >Next</button>
			</div>
		</div>
	)
}

export default Pagination