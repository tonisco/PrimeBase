import { useState } from "react"
import axios from "axios"
import { Controller, useForm } from "react-hook-form"
import { ClipLoader } from "react-spinners"
import { toast } from "react-toastify"
import * as yup from "yup"

import { yupResolver } from "@hookform/resolvers/yup"

import Breadcrumb from "../../components/Breadcrumb"
import Input from "../../components/Input"
import Layout from "../../components/Layout"
import { RequestLoanData, RequestLoanResponse } from "../../types"

const schema = yup
  .object({
    full_name: yup
      .string()
      .matches(
        /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})/,
        "Full name is not filled correctly",
      )
      .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, "Full name is not filled correctly")
      .required(),
    loan_amount: yup.number().required(),
    repayment_duration: yup.number().required(),
    email: yup.string().email(),
  })
  .required()

type FormData = yup.InferType<typeof schema>

const Apply = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver<FormData>(schema),
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await axios.post<
        any,
        RequestLoanResponse,
        RequestLoanData
      >(import.meta.env.VITE_API_URL, {
        action: "request_for_loan",
        full_name: data.full_name,
        loan_amount: data.loan_amount,
        repayment_duration: data.repayment_duration,
      })

      if (!result.result) {
        return toast.error(result.message)
      }

      toast.success(result.message)

      //   send email
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message)
        return error.message
      } else {
        toast.error("Failed to send message")
      }
    }
  }

  return (
    <Layout>
      <Breadcrumb currPage="Apply" heading="Apply for a loan" />
      <section className="px-6 py-14">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-6xl mx-auto flex flex-col gap-8 bg-white px-10 py-10 rounded-lg shadow-lg"
        >
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-semibold mb-2">Loan Application</h1>
            <p className="text-sm text-gray-500">
              <span className="text-blue-500 font-bold">* </span> Fill out the
              form and get approved within five working hours
            </p>
          </div>

          <Controller
            name="full_name"
            control={control}
            render={({ field }) => (
              <Input
                labelText="Full name"
                errorText={errors.full_name?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="loan_amount"
            control={control}
            render={({ field }) => (
              <Input
                type="number"
                errorText={errors.loan_amount?.message}
                labelText="Loan Amount"
                {...field}
              />
            )}
          />

          <Controller
            name="repayment_duration"
            control={control}
            render={({ field }) => (
              <Input
                type="number"
                errorText={errors.repayment_duration?.message}
                labelText="Repayment Duration (in months)"
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                errorText={errors.email?.message}
                message="Email is used to receive the repayment schedule and its optional"
                labelText="Email"
                {...field}
              />
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 hover:bg-blue-500 flex items-center gap-2 disabled:cursor-not-allowed disabled:bg-blue-900 transition-all duration-500 py-2 self-center text-base text-white bg-blue-600 rounded-lg sm:text-lg"
          >
            {!isSubmitting ? (
              <p>Apply now</p>
            ) : (
              <>
                <p>Applying</p>
                <ClipLoader size={16} color="white" />
              </>
            )}
          </button>
        </form>
      </section>
    </Layout>
  )
}

export default Apply
