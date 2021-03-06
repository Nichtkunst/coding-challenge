/** @jsx jsx */
import * as React from "react";
import { css } from "@emotion/core";
import { jsx } from "theme-ui";
import { useObserver } from "mobx-react";

// responsive HTML table
// https://css-tricks.com/responsive-data-tables/

const table = css`
  /* 
Generic Styling, for Desktops/Laptops 
*/
  table {
    width: 100%;
    border-collapse: collapse;
  }
  /* Zebra striping */
  tr:nth-of-type(odd) {
    background: #eee;
  }
  th {
    background: #333;
    color: white;
    font-weight: bold;
  }
  td,
  th {
    padding: 6px;
    border: 1px solid #ccc;
    text-align: left;
  }
  /*
	Max width before this PARTICULAR table gets nasty. This query will take effect for any screen smaller than 760px and also iPads specifically.
	*/
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      margin: 0 0 1rem 0;
    }

    tr:nth-of-type(odd) {
      background: #ccc;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 0px;
      left: 6px;
      width: 45%;
      padding-right: 16px;
      white-space: nowrap;
    }

    /*
		Label the data
    You could also use a data-* attribute and content for this. That way "bloats" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.
		*/
    td:nth-of-type(1):before {
      content: "Name";
    }
    td:nth-of-type(2):before {
      content: "Alter";
    }
    td:nth-of-type(3):before {
      content: "Klasse";
    }
    td:nth-of-type(4):before {
      content: "Aktion";
    }
  }
`;

type TableProps = {
  titles: {
    id: string;
    component: React.ReactNode;
  }[];
  children: React.ReactNode;
};

// observer by default might be not a good idea
const Table: React.FC<TableProps> = ({ titles, children }) => {
  return useObserver(() => (
    <table css={table} role="table">
      <thead role="rowgroup">
        <tr role="row">
          {titles.map((i) => (
            <th role="columnheader" key={i.id}>
              {i.component}
            </th>
          ))}
        </tr>
      </thead>
      <tbody role="rowgroup">{children}</tbody>
    </table>
  ));
};

export default Table;
