import './styles.css'
import pie from '../../../assets/photo1.png'

export default function Section1() {
  return (
    <section className='section1'>
      <div className='section1-img'>
      <img src={pie} alt="pie" />
      </div>
    </section>
  )
}

