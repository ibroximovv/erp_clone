import { useContext, useState, type FormEvent } from "react"
import { Context } from "../../context/Context"
import type { UploadType } from "../../types/UploadType"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import CreateCaption from "../../components/CreateCaption"
import { Input } from "antd"
import UploadImg from "../../components/UploadImg"
import { instance } from "../../hooks/instance"

const MajorCrud = () => {
  const { token } = useContext(Context)
  const [loading, setLoading] = useState<boolean>(false)
  const [image, setImage] = useState<UploadType | any>()
  const [name, setName] = useState<string>('')
  const navigate = useNavigate()

  function handleCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const data = { image: image.filename, name}
    instance.post('/stacks', data, {
      headers: { 'Authorization': `Bearer ${token}`}
    }).then(() => {
      toast.success('Yaratildi')
      setLoading(false)
      setTimeout(() => navigate(-1), 600);
    }).catch(() => {
      setLoading(false)
      toast.error("Xatolik bor")
    })
  }


  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleCreate} autoComplete="off" className="p-5">
        <div className="bg-white rounded-md p-5">
          <CreateCaption loading={loading} title="Yo'nalish qo'shish" />
          <div className="mt-[30px]">
            <Input value={name} onChange={(e) => setName(e.target.value)} className="mb-5 !w-[60%]" size="large" name="name" placeholder="Yo'nalish nomini kiriting" allowClear />
            <UploadImg setImage={setImage}/>
          </div>
        </div>
      </form>
    </>
  )
}

export default MajorCrud