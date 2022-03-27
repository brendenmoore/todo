import React, { useState } from 'react'

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

	function getPaginatedData() {
		const startIndex = currentPage * dataLimit - dataLimit
		const endIndex = startIndex + dataLimit
		return data.slice(startIndex, endIndex)
	}

	function getPaginationGroup() {
		let start = Math.floor(currentPage - pageLimit / 2)
		if (currentPage < pageLimit / 2) {
			start = 0
		}
		if (currentPage > pages - pageLimit + 1) {
			start = pages - pageLimit
		}
		return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
	}

	return (
		<div>
			{/* Items Wrapper */}
			<div className={wrapperClassName}>
				{getPaginatedData().map((d, idx) => (
					<RenderComponent key={idx} todo={d} />
				))}
			</div>
			{/* Page Navigation */}
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