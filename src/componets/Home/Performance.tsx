import { AiOutlineArrowRight, AiOutlineLogout } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"
import { LineChart } from "../Charts/LineChar"


export const PerformanceCard = () => {
    return (
        <div>
            <div className="p-8 space-y-12 bg-primaryDark min-h-[400px] max-h-[400px]">
                <div className="flex justify-between">
                    <div className="space-y-3">
                        <h1 className="text-sm">PORTFOLIO VALUE</h1>
                        <div className="space-y-2">
                            <h1 className="text-PrimaryBlue text-2xl font-bold">$32</h1>
                            <div className="flex space-x-2 text-sm items-center">
                                <AiOutlineLogout className="text-sm -rotate-45 text-green" />
                                <p className="text-green text-xs">+15.12%</p>
                                <p> | <span className="text-text/70 text-xs">Last 30 days</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={" w-12 h-12 bg-faddedBlue flex justify-center items-center rounded-xl group-hover:bg-faddedBlue "}>
                            <BsArrowRight size={20} className="text-purple" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-[50%]">
                        <LineChart />
                    </div>
                    <div className="w-[50%]">
                        <LineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}