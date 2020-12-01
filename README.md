[![License: Apache2](https://img.shields.io/badge/License-Apache2-green.svg)](https://opensource.org/licenses/Apache-2.0)


# A Decoupled Approach for the ByDesign Tax Engine
[![](https://i.imgur.com/fn8PnPn.jpg)]()

## Description
This application calculates tax rates and tax base amounts based on SAP Business ByDesign Tax Input Data for the BADI's CalculationProcedureForTaxes. When invoked, it gets the data from BADI, runs a dummy calculation (just as an example so you can change it) and returns tax rate and tax base amount.

## Requirements
* SAP Business ByDesign Partner's Development Tenant
* The [CalculationProcedureForTaxes BADI](https://github.com/SAP-samples/sapbydesign-api-samples/) configured.

## Notes
* 

## Deployment
Clone or download this repository:
```bash
git clone https://github.com/B1SA/byd-taxengine.git
```
From its root folder, open the terminal, login to your SCP account and push it.
```bash
cf push --random-route
```
For details on how to deploy apps on SCP CF check this tutorial: [Get Started with SAP Cloud Platform Trial](https://developers.sap.com/tutorials/cp-trial-quick-onboarding.html)

## Support and Contributions
This repository is provided "as-is". No warranty or support is available. Feel free to open issues.

## License
Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.

