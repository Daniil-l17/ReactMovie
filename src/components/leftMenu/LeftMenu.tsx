import { Input } from "@chakra-ui/react"

export const LeftMenu = () => {
  return (
    <div style={{borderLeft: `3px solid #1d1e23`}} className="flex flex-col !w-[350px] py-6 px-3">
      <div className="flex justify-center w-full">
      <Input className="!w-[250px]" focusBorderColor='pink.400' placeholder='Поиск по....' />
      </div>
      <h1 className=" text-[22px] mt-7 text-white font-semibold">Лучшие Артисты</h1>
    </div>
  )
}
