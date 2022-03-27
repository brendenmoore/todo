import React, { useState, useEffect } from 'react'

function Pagination({ data, RenderComponent, siblingCount, dataLimit, wrapperClassName }) {

	const [pages, setPages] = useState(Math.round(data.length / dataLimit))
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		setPages(Math.round(data.length / dataLimit))
		setCurrentPage(1)
	}, [data.length, dataLimit])

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
		console.log(pages)
		if (pages < siblingCount + 1) {
			return range(1, pages)
		}
		let leftIndex = Math.max(currentPage - siblingCount, 1)
		let rightIndex = Math.min(currentPage + siblingCount, pages)
		return range(leftIndex, rightIndex)
	}

	function range(start, end) {
		let length = end - start + 1
		return Array.from({ length }, (_, idx) => idx + start)
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