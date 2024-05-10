import './certifications.css'

import Card from '../../components/Card'
import data from './data'


const Certifications = () => {
  return (
    <section id="cert">
      <h2>Degree / Certifications</h2>
      <br />
      <div className="container cert_container">
        {
          data.map(item => (
            <Card key={item.id} className="cert light">
              <div className="cert_icon">{item.icon}</div>
              <div className="cert_details">
                <h4>{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Certifications