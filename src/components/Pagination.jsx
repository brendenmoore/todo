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

	const getPaginatedData = () => {
		const startIndex = currentPage * dataLimit - dataLimit
		const endIndex = startIndex + dataLimit
		return data.slice(startIndex, endIndex)
	}

	const getPaginationGroup = () => {
		// let start = Math.floor(currentPage - pageLimit / 2)
		let start = currentPage < pageLimit / 2 ? 0 : Math.floor(currentPage - pageLimit / 2)
		if (currentPage < pageLimit / 2) {
			start = 0
		}
		if (currentPage > pages - pageLimit + 1) {
			start = pages - pageLimit
		}
		// const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
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
				<button onClick={goToPreviousPage} disabled={currentPage === 1} className="disabled:text-gray-200">Previous</button>
				{getPaginationGroup().map((pageNumber, index) => (
					<button key={index} onClick={changePage} disabled={currentPage === pageNumber} className=" disabled:text-green-400 disabled:underline">{pageNumber}</button>
				))}
				<button onClick={goToNextPage} disabled={currentPage === pages} className="disabled:text-gray-200">Next</button>
			</div>
		</div>
	)
}

export default Pagination