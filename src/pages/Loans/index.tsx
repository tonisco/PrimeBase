import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import Breadcrumb from "../../components/Breadcrumb"
import Input from "../../components/Input"
import Layout from "../../components/Layout"
import Table from "../../components/Table"
import { GetAllLoanData, GetAllLoanResponse } from "../../types"
import data from "../../utils/data"

const formatNumber = (val: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  }).format(parseInt(val))
}

const columnHelper = createColumnHelper<GetAllLoanResponse["data"][0]>()

const columns = [
  columnHelper.accessor("ID", {
    cell: (info) => info.getValue(),
    header: () => "Id",
  }),
  columnHelper.accessor("TRANSACTION_ID", {
    cell: (info) => info.getValue().toLocaleLowerCase(),
    header: () => "Transaction Id",
  }),
  columnHelper.accessor("FULL_NAME", {
    cell: (info) => info.getValue().toLocaleLowerCase(),
    header: () => "Full Name",
  }),
  columnHelper.accessor("LOAN_AMOUNT", {
    cell: (info) => formatNumber(info.getValue()),
    header: () => "Loan Amount",
  }),
  columnHelper.accessor("REPAYMENT_DURATION", {
    cell: (info) => info.getValue(),
    header: () => "Repayment Duration",
  }),
  columnHelper.accessor("CREATED_TIME", {
    cell: (info) => info.getValue(),
    header: () => "Created Time",
  }),
  columnHelper.display({
    id: "edit",
    cell: (info) => {
      const { TRANSACTION_ID } = info.row.original
      return (
        <Link to={`/loans/${TRANSACTION_ID}`}>
          <div className=" self-center rounded-xl bg-blue-500 px-2 py-2 lg:px-4">
            <p className="text-center text-xs text-white lg:text-sm">Details</p>
          </div>
        </Link>
      )
    },
    header: "",
  }),
]

const Loans = () => {
  const [values, setValues] = useState<GetAllLoanResponse["data"]>([])
  const [idSearch, setIdSearch] = useState("")

  const getData = useCallback(async () => {
    try {
      const getData = await axios.post<any, GetAllLoanResponse, GetAllLoanData>(
        import.meta.env.VITE_API_URL,
        {
          actions: "get_all_loan_request",
          transaction_id: idSearch,
        },
      )

      if (getData.data) {
        setValues(getData.data)
      }
    } catch (error) {
      if (idSearch) {
        setValues(
          data.data.filter((val) =>
            val.TRANSACTION_ID.toLocaleLowerCase().startsWith(
              idSearch.toLocaleLowerCase(),
            ),
          ),
        )
      } else setValues(data.data)
    }
  }, [idSearch])

  useEffect(() => {
    getData()
  }, [getData])

  const { getHeaderGroups, getRowModel, setPageIndex, getPageCount } =
    useReactTable({
      columns,
      data: values,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    })

  return (
    <Layout>
      <Breadcrumb currPage="Loans" heading="Loans" />
      <div className="px-6 py-14 w-[95vw] flex flex-col gap-8 lg:w-full overflow-x-scroll lg:overflow-hidden">
        <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
          <h1 className="text-center text-4xl font-semibold">
            All Loans Provided to Customers
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-64">
              <Input
                labelText="Transaction Id"
                labelClass="!bg-gray-100"
                value={idSearch}
                onChange={(e) => setIdSearch(e.target.value)}
              />
            </div>
            <button
              onClick={getData}
              className="px-8 self-start text-white py-2 text-base bg-blue-600 rounded-lg sm:text-lg"
            >
              Search
            </button>
          </div>
        </div>
        {values.length > 0 && (
          <Table
            getHeaderGroups={getHeaderGroups}
            getPageCount={getPageCount}
            getRowModel={getRowModel}
            setPageIndex={setPageIndex}
          />
        )}
      </div>
    </Layout>
  )
}

export default Loans
