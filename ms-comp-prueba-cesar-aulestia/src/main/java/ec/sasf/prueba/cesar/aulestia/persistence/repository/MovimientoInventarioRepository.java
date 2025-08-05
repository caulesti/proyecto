package ec.sasf.prueba.cesar.aulestia.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.MovimientoInventarioEntity;
import ec.sasf.prueba.cesar.aulestia.persistence.entity.ProductoEntity;

public interface MovimientoInventarioRepository extends JpaRepository<MovimientoInventarioEntity, Long>{
    
    List<MovimientoInventarioEntity> findAllByProducto(ProductoEntity producto);

}
