import Breadcrumb from "../../components/Breadcrumb"
import Input from "../../components/Input"
import Layout from "../../components/Layout"

const Apply = () => {
  return (
    <Layout>
      <Breadcrumb currPage="Apply" heading="Apply for a loan" />
      <section className="px-6 py-14">
        <form className="max-w-6xl mx-auto flex flex-col gap-8 bg-white px-10 py-10 rounded-lg shadow-lg">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-semibold mb-2">Loan Application</h1>
            <p className="text-sm text-gray-500">
              <span className="text-blue-500 font-bold">* </span> Fill out the
              form and get approved within five working hours
            </p>
          </div>
          <Input labelText="Full name" name="full_name" id="full_name" />
          <Input
            labelText="Loan Amount"
            name="loan_amount"
            id="loan_amount"
            type="number"
          />
          <Input
            labelText="Repayment Duration (in months)"
            name="repayment_duration"
            id="repayment_duration"
            type="number"
          />
          <Input labelText="Email" name="email" id="email" type="email" />

          <button
            type="submit"
            className="px-6 hover:bg-blue-500 transition-all duration-500 py-2 self-center text-base text-white bg-blue-600 rounded-lg sm:text-lg"
          >
            Apply now
          </button>
        </form>
      </section>
    </Layout>
  )
}

export default Apply
