import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Link from "next/link";



const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="bg-[#F9FAFB] ">
        <div >
          <h2 className="text-4xl font-black pt-26">로그인</h2>
          <div className="mt-4 text-lg font-[350] text-[#4B5563]">아직 회원이 아니신가요?{" "}
            <Link href="/signup" className="text-[#2563EB]">
             회원가입
            </Link>

          </div>

        </div>

        <form className="flex flex-col items-center justify-center max-w-lg p-12 mx-auto mt-10 mb-20 bg-white rounded-lg shadow-xl">
          <div className="w-full space-y-8">
            <div className="w-full">
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full px-[17px] py-[18px]  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[18px]"/>
            </div>
            <div className="w-full">
              <input
                type="password"
                placeholder="비밀번호"
                className="w-full px-[17px] py-[18px]  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[18px]"/>
            </div>

            <div className="flex justify-between w-full">
              <div className="flex items-center">
                <input type="checkbox" className="w-5 h-5"/>
                <div className="ml-2 text-lg text-[#111827]">로그인 유지</div>
              </div>
              <div className="text-[#2563EB] text-lg">
                비밀번호를 잊으셨나요?
              </div>
            </div>

            <button className="w-full text-lg p-[17px]  bg-[#2563EB] text-white rounded-md hover:bg-blue-600 text-medium  ">
              로그인
            </button>
          </div>

          <div className="w-full">
            <div className="flex items-center w-full mt-9 md-8">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-lg text-[#6B7280]">또는</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center w-full mt-8 space-x-4">
              <button className=" bg-white hover:bg-gray-50 px-[17px] py-[13px] border rounded-[6px] shadow-sm text-[#374151] w-full font-medium">Google</button>
              <button className=" text-[#374151] hover:bg-yellow-400 px-[17px] py-[13px] border rounded-[6px] shadow-sm bg-[#FEE500] w-full font-medium">KaKao</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}


export default LoginPage;