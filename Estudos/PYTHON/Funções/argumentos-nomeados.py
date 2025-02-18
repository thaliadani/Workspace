def salvar_carro(marca, modelo, ano, placa):
    print(f"Carro salvo com sucesso! {marca}, {modelo}, {ano}, {placa}")

salvar_carro(**{"marca": "Fiat", "modelo": "Palio", "ano": 2010, "placa": "ABC-1234"})