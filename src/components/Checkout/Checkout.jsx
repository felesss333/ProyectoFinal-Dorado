import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import CartContext from '../../context/CartContext';
import { Form } from 'react-bootstrap';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../main';
import { useNavigate } from 'react-router-dom';
import 'sweetalert2/dist/sweetalert2.min.css'

const Checkout = () => {
  const [user, setUser] = useState({
    nombre: '',
    telefono: '',
    email: '',
    repetirMail: '',
  });

  const [emailMatch, setEmailMatch] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const { cart, getTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const validateEmail = () => {
    return user.email === user.repetirMail;
  };

  const validateForm = () => {
    const errors = {};
    if (!user.nombre) {
      errors.nombre = 'Nombre Completo';
    }
    if (!user.telefono) {
      errors.telefono = 'Teléfono';
    }
    if (!user.email) {
      errors.email = 'Email';
    }
    if (!user.repetirMail) {
      errors.repetirMail = 'Validar Email';
    }

    return errors;
  };

  const getOrder = () => {
    const errors = validateForm();
  
    if (Object.keys(errors).length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Campos Incompletos:',
        html: `<hr class="linea1 mb-3"/>${Object.values(errors).map((error) => `<p> - ${error}</p>`).join('')}`,
      });
      return;
    }
  
    if (!validateEmail()) {
      Swal.fire({
        icon: 'error',
        title: 'Validación Incorrecta <hr class="linea1 mt-3"/>',
        text: 'Los emails no coinciden',
      });
      return;
    }
  
    const order = {
        buyer: user,
        items: cart,
        total: getTotal(),
      };
      
      const ordersCollection = collection(db, 'orders');
  
      addDoc(ordersCollection, order)
        .then(({ id }) => {
          Swal.fire({
            icon: 'success',
            title: '¡Compra Realizada! <hr class="linea1 mt-3"/>',
            html: `Orden de compra generada con el Nº: <br/> <div class="ordencompra">${id}</div>`,
            showCloseButton: true,
            showConfirmButton: false,
            focusConfirm: false,
          });
  
          clearCart();
          navigate('/');
        })
        .catch((error) => {
          console.error('Error al procesar la orden:', error);
        });
  };
  

  return (
    <div className="row col-lg-8 col-12 mx-auto mt-5 mb-1">
        <div className='row'>
      <h3 className="titulocheckout">Resumen de Compra</h3>
      <h3 className="valortotalcompra">U$S {getTotal().toFixed(2)}</h3>
      </div>

      <div className="col-lg-6 col-10 mx-auto" data-bs-theme="dark">
      <hr className='linea1 mb-3'></hr>
      <p className='compradetail'>Para proceder con la compra, por favor complete los campos</p>
      <hr className='linea1 mb-3'></hr>
        <Form.Control
          className={`my-3 ${formErrors.name ? 'is-invalid' : ''}`}
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={user.nombre}
          onChange={updateUser}
        />
        <Form.Control
          className={`my-3 ${formErrors.telefono ? 'is-invalid' : ''}`}
          type="text"
          placeholder="Teléfono"
          name="telefono"
          value={user.telefono}
          onChange={updateUser}
        />
        <Form.Control
          className={`my-3 ${formErrors.email ? 'is-invalid' : ''}`}
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={updateUser}
        />
        {formErrors.email && (
          <div className="invalid-feedback">{formErrors.email}</div>
        )}
        <Form.Control
          className={`my-3 ${formErrors.repetirMail ? 'is-invalid' : ''}`}
          type="text"
          placeholder="Repetir Email"
          name="repetirMail"
          value={user.repetirMail}
          onChange={updateUser}
        />
        <hr className='linea1'></hr>
        <div className='col-12 d-flex justify-content-between mt-4'>
        <button className='confirmarcompra col-auto text-start' 
        onClick={getOrder}>
          Realizar Compra
          </button>
        <button className='cancelarcompra col-auto text-end'
          onClick={() => {
            clearCart();
            navigate('/');
          }}
        >
          Cancelar Pedido
        </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
