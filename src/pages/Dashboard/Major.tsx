import { PlusOutlined } from "@ant-design/icons"
import Caption from "../../components/Caption"
import { Input } from "antd"
import CustomTable from "../../components/CustomTable"
import { useState, type ChangeEvent } from "react"
import debounce from "../../hooks/debounce"
import { getMajor } from "../../service/getMajor"

const Major = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Nomi',
      dataIndex: 'name',
    },
    {
      title: 'Yaratilgan vaqt',
      dataIndex: 'createdAt',
    },
    {
      title: 'Batafsil',
      dataIndex: 'action',
    },
  ];
  
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setLoading(true)
    setSearch(e.target.value)
  }

  const searchByName = debounce(search, 500)
  const majorList = getMajor("/stacks", searchByName, setLoading)

  return (
    <div className="p-5">
      <div className="p-5 bg-white rounded-md">
        <Caption title="Yo'nalishlar" count={majorList?.total ? majorList?.total : 0} icon={<PlusOutlined/>}/>
        <div className="py-5">
          <Input onChange={handleSearch} allowClear className="!w-[300px]" size="large" placeholder="Qidirish" />
        </div>
        <CustomTable columns={columns} data={majorList.data} loading={loading}/>
      </div>
    </div>
  )
}

export default Major