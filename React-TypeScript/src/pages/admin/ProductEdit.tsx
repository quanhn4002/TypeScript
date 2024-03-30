import { TProduct } from '~/interface/product'
import { SubmitHandler, useForm } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProduct } from '~/api/product'

type Props = {
  onEdit: (product: TProduct) => void
}

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow('')
})

const ProductEdit = ({ onEdit }: Props) => {
  const { id } = useParams()
  console.log(id)
  const [product, setProducts] = useState<TProduct | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct)
  })
  const onEditSubmit: SubmitHandler<TProduct> = (data) => {
    console.log(data)
    onEdit(data)
  }
  useEffect(() => {
    fetch('http://localhost:3000/products/' + id)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])
  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit(onEditSubmit)}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            placeholder='Title'
            {...register('title', { required: true, minLength: 3, maxLength: 255 })}
            defaultValue={product?.title}
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
            defaultValue={product?.price}
            {...register('price', { required: true, min: 0 })}
          />
          {errors.price && <span className='text-danger'>{errors.price.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='description'
            placeholder='Description'
            defaultValue={product?.description}
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

export default ProductEdit
