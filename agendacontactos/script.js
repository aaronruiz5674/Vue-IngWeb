new Vue({
    el: '#app',
    data: {
      // Lista de contactos
      contactos: [
        { nombre: 'Juan Pérez', email: 'juan@example.com', telefono: '555123456' },
        { nombre: 'Ana Gómez', email: 'ana@example.com', telefono: '555987654' }
      ],
      // Nuevo contacto a agregar
      nuevoContacto: {
        nombre: '',
        email: '',
        telefono: ''
      }
    },
    methods: {
      // Método para agregar un nuevo contacto
      agregarContacto() {
        if (this.nuevoContacto.nombre && this.nuevoContacto.email && this.nuevoContacto.telefono) {
          this.contactos.push({ 
            nombre: this.nuevoContacto.nombre, 
            email: this.nuevoContacto.email, 
            telefono: this.nuevoContacto.telefono 
          });
          // Limpiar los campos después de agregar
          this.nuevoContacto.nombre = '';
          this.nuevoContacto.email = '';
          this.nuevoContacto.telefono = '';
        } else {
          alert("Por favor, complete todos los campos.");
        }
      },
      // Método para borrar un contacto
      borrarContacto(index) {
        this.contactos.splice(index, 1);
      }
    }
  });
  