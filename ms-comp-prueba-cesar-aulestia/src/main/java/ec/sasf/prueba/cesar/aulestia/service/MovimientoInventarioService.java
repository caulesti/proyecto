package ec.sasf.prueba.cesar.aulestia.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.MovimientoInventarioEntity;
import ec.sasf.prueba.cesar.aulestia.persistence.entity.ProductoEntity;
import ec.sasf.prueba.cesar.aulestia.persistence.repository.MovimientoInventarioRepository;
import ec.sasf.prueba.cesar.aulestia.persistence.repository.ProductoRepository;
import ec.sasf.prueba.cesar.aulestia.service.dto.MovimientoInventarioDto;
import jakarta.transaction.Transactional;

@Service
public class MovimientoInventarioService {
    private final MovimientoInventarioRepository movimientoInventarioRepository;
    private final ProductoRepository productoRepository;

    public MovimientoInventarioService(MovimientoInventarioRepository movimientoInventarioRepository, ProductoRepository productoRepository) {
        this.movimientoInventarioRepository = movimientoInventarioRepository;
        this.productoRepository = productoRepository;
    }

    @Transactional
    public MovimientoInventarioEntity add(MovimientoInventarioDto dto){
        MovimientoInventarioEntity movimientoInventario = new MovimientoInventarioEntity();
        //Producto
        ProductoEntity producto = productoRepository.findById(dto.getIdProducto()).orElseThrow(() -> new IllegalArgumentException("El producto no existe"));
        if (dto.getTipoMovimiento().equalsIgnoreCase("entrada")) {
            producto.setStock(producto.getStock() + dto.getCantidad());    
        } else if (dto.getTipoMovimiento().equalsIgnoreCase("salida")) {
            producto.setStock(producto.getStock() - dto.getCantidad());
        } else {
            throw new IllegalArgumentException("El tipo de movimiento no existe");
        }
        movimientoInventario.setProducto(producto);
        movimientoInventario.setCantidad(dto.getCantidad());
        movimientoInventario.setTipoMovimiento(dto.getTipoMovimiento());
        movimientoInventario.setFecha(LocalDateTime.now());
        return movimientoInventarioRepository.save(movimientoInventario);
    }

    public List<MovimientoInventarioEntity> obtenerPorProducto(Long idProducto) {
        ProductoEntity producto = productoRepository.findById(idProducto).orElseThrow(() -> new IllegalArgumentException("Producto no existe"));
        return movimientoInventarioRepository.findAllByProducto(producto);
    }
}
