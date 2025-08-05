package ec.sasf.prueba.cesar.aulestia.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.ProductoEntity;

public interface ProductoRepository extends JpaRepository<ProductoEntity, Long>{

}
