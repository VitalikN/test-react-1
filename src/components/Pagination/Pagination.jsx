import React from "react";

export const Pagination = ({total, perPage})=> {
    const pageNumbers = []
for (let i = 0; i < Math.ceil(total/ perPage); i++) {
   pageNumbers.push(i)
    
}

return (
    <div>
        <ul>
            {pageNumbers.map()}
        </ul>
    </div>
)


}