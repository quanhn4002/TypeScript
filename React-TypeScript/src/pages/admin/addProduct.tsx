import { productType } from '@/interfaces/products'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {
  onAdd: (product: productType) => void
}
const schema = Joi.object({
  title: Joi.string().required().min(3).max(300),
  price: Joi.number().required().min(0),
  thumbnail: Joi.string(),
  description: Joi.string().allow('')
})
const addProduct = ({ onAdd }: Props) => {
  const {
    register, // là một hàm của react-hook-form giúp kết nối giữa input và form
    handleSubmit, // là một hàm của react-hook-form giúp xử lý sự kiện submit của form
    formState: { errors } // là một object chứa các lỗi của form
  } = useForm<productType>({
    resolver: joiResolver(schema)
  })
  const onSubmit1: SubmitHandler<productType> = (data) => {
    onAdd(data)
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit1)} className='form'>
        <h2>ADD PRODUCTS</h2>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            placeholder='Title'
            {...register('title', { required: true, minLength: 3, maxLength: 300 })}
          />
          {errors.title && <span className='text-danger'>{errors.title.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            className='form-control'
            id='price'
            placeholder='Price'
            {...register('price', { required: true, min: 0 })}
          />
          {errors.title && <span className='text-danger'>{errors.title.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='image'>Image</label>
          <input type='tẽ' className='form-control' id='thumnail' placeholder='Image' {...register('thumbnail')} />
        </div>

        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='description'
            placeholder='Description'
            {...register('description')}
          />
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default addProduct
