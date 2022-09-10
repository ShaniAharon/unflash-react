import {memo} from 'react'
import {useFormRegister} from '../hooks/useFormRegister.js'

export const TodoFilter = memo((props) => {
  const [register] = useFormRegister(
    {
      label: '',
    },
    props.onChangeFilter
  )

  console.log('Filter rendered')
  return (
    <section className="todo-filter">
      <section>
        <label htmlFor="label">Label</label>
        <input
          type="text"
          className="input-search"
          placeholder="Search free high-resolution photos"
          {...register('label')}
        />
      </section>
    </section>
  )
})
