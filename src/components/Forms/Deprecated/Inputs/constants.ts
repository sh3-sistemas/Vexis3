export type inputState = {
    normalState: string;
    errorState: string;
    successState: string;
    disabled: string;
}

// Floating Input Styles
export const FloatingLabelStyle = {
    normalState: "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 text-gray-500  peer-focus:text-gray-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
    errorState: "text-red-600  peer-placeholder-shown:scale-100 peer-focus:text-red-600",
    successState: "text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
    disabled: "text-gray-400 bg-transparent peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
} as inputState

export const FloatingInputStyle = {
    normalState: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-gray-600 peer",
    errorState: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border appearance-none   border-red-600  focus:outline-none focus:ring-0 focus:border-red-600 peer",
    successState: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none    focus:outline-none focus:ring-0 focus:border-green-600 peer",
    disabled: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border-1  border-gray-200 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
} as inputState

// Regular Input Styles
export const RegularLabelStyle = {
    normalState: "block mb-2 text-sm font-medium text-gray-900 ",
    errorState: "text-red-700 ",
    successState: "block mb-2 text-sm font-medium text-green-700 ",
    disabled: "text-gray-900 "
} as inputState

export const RegularInputStyle = {
    normalState: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      ",
    errorState: "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500  focus:border-red-500 block w-full p-2.5   ",
    successState: "bg-green-50 border border-green-500 text-green-900  placeholder-green-700  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  ",
    disabled: "bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed      "
} as inputState