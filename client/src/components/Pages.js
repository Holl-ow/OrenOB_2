import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "../index";


export const Pages = observer(() => {

    const { object } = useContext(Context)

    const pageCount = Math.ceil(object.totalCount / object.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={object.page === page}
                    onClick={() => object.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
})