import { useSelector } from "react-redux";
import FileUpload from "./File";

const Resume = () => {
  const progress = useSelector((state) => state.Resume);
  console.log(progress);
  return (
    <div className="overflow-y-auto h-screen ">
      <div className=" m-12 ">
        <h1 className="text-4xl font-bold text-center mb-2">
          Resume Processor
        </h1>
        <p className="text-gray-400 text-center pb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, hic.
        </p>

        <div className="flex justify-center mb-24">
          <FileUpload></FileUpload>
        </div>

        <div className="flex justify-between gap-8">
          <div className="bg-gray-100 w-full rounded-xl"></div>

          <div className="overflow-x-auto w-full border border-gray-200 rounded-xl p-4">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap p-4 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap p-4 font-medium text-gray-900">
                    Date of Birth
                  </th>
                  <th className="whitespace-nowrap p-4 font-medium text-gray-900">
                    Role
                  </th>
                  <th className="whitespace-nowrap p-4 font-medium text-gray-900">
                    Salary
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap p-4 font-medium text-gray-900">
                    John Doe
                  </td>
                  <td className="whitespace-nowrap p-4 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap p-4 text-gray-700">
                    Web Developer
                  </td>
                  <td className="whitespace-nowrap p-4 text-gray-700">
                    $120,000
                  </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap p-4 font-medium text-gray-900">
                    Jane Doe
                  </td>
                  <td className="whitespace-nowrap p-4 text-gray-700">
                    04/11/1980
                  </td>
                  <td className="whitespace-nowrap p-4 text-gray-700">
                    Web Designer
                  </td>
                  <td className="whitespace-nowrap p-4 text-gray-700">
                    $100,000
                  </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap p-4 font-medium text-gray-900">
                    Gary Barlow
                  </td>
                  <td className="whitespace-nowrap p-4 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap p-4 text-gray-700">
                    Singer
                  </td>
                  <td className="whitespace-nowrap p-4 text-gray-700">
                    $20,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
