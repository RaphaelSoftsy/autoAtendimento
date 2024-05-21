import React, { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

const GeneratorBarCode = () => {

    const list = [
        {
            id: 1,
            codigoBarra: '0019234567890123456789012345678901234564568'
        }
    ];

    const barcodeRef = useRef(null);

    useEffect(() => {
        if (barcodeRef.current) {
            JsBarcode(barcodeRef.current, list[0].codigoBarra, {
                format: 'CODE128',
                displayValue: false
            });
        }
    }, [list]);

    localStorage.setItem('codigo-barra', list[0].codigoBarra)

    return <svg ref={barcodeRef}></svg>;
};

export default GeneratorBarCode;
