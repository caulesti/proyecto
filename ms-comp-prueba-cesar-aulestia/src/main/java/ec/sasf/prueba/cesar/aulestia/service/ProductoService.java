package ec.sasf.prueba.cesar.aulestia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.ProductoEntity;
import ec.sasf.prueba.cesar.aulestia.persistence.repository.ProductoRepository;
import ec.sasf.prueba.cesar.aulestia.persistence.repository.ProveedorRepository;
import ec.sasf.prueba.cesar.aulestia.service.dto.ProductoDto;
import jakarta.transaction.Transactional;

@Service
public class ProductoService {
    private final ProductoRepository productoRepository;
    private final ProveedorRepository proveedorRepository;

    @Autowired
    public ProductoService(ProductoRepository productoRepository, ProveedorRepository proveedorRepository) {
        this.productoRepository = productoRepository;
        this.proveedorRepository = proveedorRepository;
    }

    public ProductoEntity add(ProductoDto dto){
        ProductoEntity producto = new ProductoEntity();
        producto.setNombre(dto.getNombre());
        producto.setDescription(dto.getDescripcion());
        producto.setPrice(dto.getPrecio());
        producto.setStock(dto.getStockInicial());
        producto.setProveedor(proveedorRepository.findById(dto.getIdProveedor()).orElseThrow(() -> 
        new IllegalArgumentException("No existe el proveedor")));

        return productoRepository.save(producto);
    }

    public List<ProductoEntity> getProductos() {
        return productoRepository.findAll();
    }

    @Transactional
    public ProductoEntity actualizarPrecio(Long id, Double precio) {
        ProductoEntity producto = productoRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("producto no existe"));
        producto.setPrice(precio);
        return productoRepository.save(producto);
    }

}
