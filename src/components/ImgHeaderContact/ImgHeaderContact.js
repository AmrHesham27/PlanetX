import './ImgHeaderContact.css'
import { Form } from 'react-bootstrap'
import Footer2 from '../Footer2/Footer2'

function ImgHeaderContact() {
  return (
    <div className='ImgHeaderContact'>
      <video src='/videos/4.mp4' autoPlay loop muted />
      <h1>Contact us</h1>      
      <div className='mainContainer'>
        <div className='Form'>
          <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="please enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
              </Form.Group>
          </Form>
          <div className='sendContainer'>
            <button>Send</button>
          </div>
        </div>

        <div className='contactInfo'>
          <p className='p1'>Get in touch with us</p>
          <hr/>
          <p className='p2'>Address</p>
          <p className='p3'>The Park Mall, N Teseen Street</p>
          <hr/>
          <p className='p2'>Comms</p>
          <p  className='p3'>01006786556</p>
          <p  className='p3'>mohamedsamy133@hotmail.com</p>
        </div>
      </div>
      <Footer2/>
    </div>
  )
}

export default ImgHeaderContact