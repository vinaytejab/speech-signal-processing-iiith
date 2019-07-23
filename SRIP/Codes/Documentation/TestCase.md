# Experiment Project Documentation
---
## Introduction
This document captures the test cases of the experiment.

## Functional Test Cases
| Test case Id | Test Scenario | Test Case | Test Steps | Test Data | Expected Output | Actual Output | Test Result | Comments |
| ---  |---    |---            |---   | ---      |  ---           |---   | ---      |  ---           |
| 1. | Open HTML in the browser|1.Running the Stimulation| 1.Install the prerequisites 2. Run the experiment |Use the required buttons| The corresponding webpage opens | The respective page is be displayed on the screen | Pass | None |
| 2. |In-built audio for Waveform button |Click on the corresponding link| 1. Select "1" button 2. Select Play/Pause/Stop ad required|Waveform is displayed|Waveform corresponds to in-built audio | Waveform corresponds to in-built audio | Pass | None|
| 3. | Hindi audio link|Click on the corresponding link | User can choose the segment of audio to hear it.  | It works as expected | Sound is played| Audio Output  | Pass | Make sure tone.js and npm are installed |
| 4. |Telugu audio link|Click on the corresponding link|1.Select "2" button 2.Select Play 3.Adjust Tempo 4.Select required Bits/Sampling|The simulation runs| Simulation should run as per mentioned functionalitty|Simulation runs as given| Pass |None|
| 5. |Tamil audio link|Click on the corresponding link|1.Select "3" button 2.Choose the graph display 3.Adjust Partial Count |The simulation runs| Simulation should run as per mentioned functionalitty|Simulation runs as given| Pass |None|
| 6. |Part 2 link|Click on the corresponding link|To change the input IT3 language to UTF-8 for selected language |The simulation runs| Simulation should run as per mentioned functionalitty|Simulation runs as given| Pass |None|

## Cross Browser Testing
| S.no | Browser | Version | Works ( Yes / No ) |
| ---  |---    |---            |---   |
| 1. | Chrome | 75 | No |
| 2. | Chrome | 74 | No |
| 3. | Chrome | 73 | No |
| 4. | Firefox | 67 | Yes |
| 5. | Firefox | 66 | Yes |
| 6. | Safari | 12.1 | Yes |
| 7. | Edge | 17 | Yes |
| 8. | Edge | 18 | Yes |
