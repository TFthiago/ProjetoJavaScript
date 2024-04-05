Feature: Comprar passagem
    Scenario: Comprar passagem entre "Boston" e "Dublin"
        Given acesso o site blazedemo 
        When seleciono a origem como "Boston" e destino como "Dublin"
        Then carrega a pagina de reservas