import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import Breadcrumb from "../../components/Breadcrumb"
import Layout from "../../components/Layout"
import Table from "../../components/Table"
import {
  GetPaymentScheduleResponse,
  GetRepaymentScheduleData,
} from "../../types"
import rawData from "../../utils/data2"

const columnHelper = createColumnHelper<GetPaymentScheduleResponse["data"][0]>()

const formatNumber = (val: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  }).format(parseInt(val))
}

const columns = [
  columnHelper.accessor("ID", {
    cell: (info) => info.getValue(),
    header: () => "Id",
  }),
  columnHelper.accessor("TRANSACTION_ID", {
    cell: (info) => info.getValue().toLocaleLowerCase(),
    header: () => "Transaction Id",
  }),
  columnHelper.accessor("LOAN_BALANCE", {
    cell: (info) => formatNumber(info.getValue()),
    header: () => "Loan Balance",
  }),
  columnHelper.accessor("EXPECTED_REPAYMENT_AMOUNT", {
    cell: (info) => formatNumber(info.getValue()),
    header: () => "Expected Repayment",
  }),
  columnHelper.accessor("INTEREST", {
    cell: (info) => formatNumber(info.getValue()),
    header: () => "Interest",
  }),
  columnHelper.accessor("TOTAL_REPAYMENT_AMOUNT", {
    cell: (info) => formatNumber(info.getValue()),
    header: () => "Total",
  }),
]

const Detail = () => {
  const { id } = useParams()

  const [data, setData] = useState<GetPaymentScheduleResponse>()
  const [loading, setIsLoading] = useState(false)

  const getData = useCallback(async () => {
    try {
      setIsLoading(true)
      const getData = await axios.post<
        any,
        GetPaymentScheduleResponse,
        GetRepaymentScheduleData
      >(import.meta.env.VITE_API_URL, {
        actions: "get_repayment_schedule",
        transaction_id: id ?? "",
      })

      if (getData) {
        setData(getData)
      }
    } catch (error) {
      setData(rawData)
    }
    setIsLoading(false)
  }, [id])

  useEffect(() => {
    getData()
  }, [getData])

  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data: data?.data ?? [],
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Layout>
      <Breadcrumb currPage="Loans" heading="Loans" />
      <section className="px-6 py-14 w-[95vw] md:w-full overflow-x-auto md:overflow-x-hidden">
        <div className="max-w-6xl w-full mx-auto mb-8 flex flex-col gap-8 bg-white px-10 py-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center">Loan Details</h1>
          {!loading && !data && (
            <p className="text-gray-700 mt-8 text-center">No Data found</p>
          )}
          {data && (
            <div className="flex gap-2 flex-col">
              <div className="flex-col sm:flex-row flex gap-2">
                <h3 className="font-semibold">Full Name: </h3>
                <p>{data.FULL_NAME}</p>
              </div>
              <div className="flex-col sm:flex-row flex gap-2">
                <h3 className="font-semibold">Loan Amount: </h3>
                <p>{data.LOAN_AMOUNT}</p>
              </div>
              <div className="flex-col sm:flex-row flex gap-2">
                <h3 className="font-semibold">Cumulative Repayment Amount: </h3>
                <p>{data.CUMULATIVE_REPAYMENT_AMOUNT}</p>
              </div>
              <div className="flex-col sm:flex-row flex gap-2">
                <h3 className="font-semibold">Repayment Duration: </h3>
                <p>{data.REPAYMENT_DURATION}</p>
              </div>
              <div className="flex-col sm:flex-row flex gap-2">
                <h3 className="font-semibold">Date: </h3>
                <p>{data.DATE.toString()}</p>
              </div>
            </div>
          )}
        </div>
        {data?.data && data.data.length > 0 && (
          <Table
            getHeaderGroups={getHeaderGroups}
            getPageCount={() => 0}
            getRowModel={getRowModel}
            setPageIndex={() => 0}
          />
        )}
      </section>
    </Layout>
  )
}

export default Detail
