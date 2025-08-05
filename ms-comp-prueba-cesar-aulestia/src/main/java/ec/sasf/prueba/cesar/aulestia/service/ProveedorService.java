package ec.sasf.prueba.cesar.aulestia.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.ProveedorEntity;
import ec.sasf.prueba.cesar.aulestia.persistence.repository.ProveedorRepository;

@Service
public class ProveedorService {
    private final ProveedorRepository proveedorRepository;

    @Autowired
    public ProveedorService(ProveedorRepository proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }

    public ProveedorEntity add(String nombre, String correo, String telefono) {
        ProveedorEntity proveedor = new ProveedorEntity();
        proveedor.setNombre(nombre);
        proveedor.setCorreo(correo);
        proveedor.setTelefono(telefono);

        return proveedorRepository.save(proveedor);
    }

}
